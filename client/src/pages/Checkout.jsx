import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  Textarea
} from '@chakra-ui/react'
import * as Yup from 'yup'
import { useFormik } from "formik";
import Header from "../components/Header";
import CartItem from "../components/cart/cartItem";
import { getDistricts, getProvinces, getWards } from "../Api/provinceAPI";
import { removeFromCart, updateCart } from "../Api/cartAPI";
import renderTotalPrice from "../utils/renderTotalPrice";
import { createOrder } from "../Api/orderAPI";

const Checkout = () => {
  const cart = useSelector(state => state.user.cart)
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [selected, setSelected] = useState({
    province: '', //province_name
    district: '', //district_name
    ward: '', //ward_name
  })
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, setValues } =
    useFormik({
      initialValues: {
        username: '',
        email: '',
        phone: '',
        province: null,
        district: null,
        ward: null,
        note: ''
      },
      validationSchema: Yup.object().shape({
        email: Yup.string()
          .required("Vui lòng nhập email")
          .email("email không hợp lệ"),
        username: Yup.string().required("Vui lòng nhập username"),
        phone: Yup.string().required("Vui lòng nhập phone"),
        province: Yup.string().required("Vui lòng chọn thành phố/tỉnh"),
        district: Yup.string().required("Vui lòng chọn thành quận/huyện"),
        ward: Yup.string().required("Vui lòng chọn thành phường/xã"),
      }),
      onSubmit: async (values) => {
        console.log(values);

        const { province_name } = provinces.find(province => province.province_id === values.province)
        const { district_name } = districts.find(district => district.district_id === values.district)
        const { ward_name } = wards.find(ward => ward.ward_id === values.ward)
        const { phone, username, email, note } = values;

        const address = `${ward_name},${district_name},${province_name}`
        handleCreateOrder({ address, phone, username, email, amount: amount + COD, note })
      },

    });


  const [amount, setAmount] = useState(0)
  const [COD, setCOD] = useState(500000)
  const handleUpdateCart = async (productId, payload) => {
    await updateCart(dispatch, productId, payload)
  }
  const handleRemoveFromCart = async (productId, payload) => {
    await removeFromCart(dispatch, productId, payload)
  }
  const handleCreateOrder = async (data) => {
    const { success } = await createOrder(dispatch, data)
    success && navigate('/')
  }
  useEffect(() => {
    const fetchProvinces = async () => {
      const provinces = await getProvinces();
      setProvinces(provinces);
    }
    fetchProvinces()
  }, [])
  useEffect(() => {
    const fetchDistricts = async (code) => {
      const districts = await getDistricts(code);

      setDistricts(districts)
    }

    values.province && fetchDistricts(values.province)
  }, [values.province])
  useEffect(() => {
    const fetchWards = async (code) => {
      const wards = await getWards(code);
      setWards(wards)
    }
    values.district && fetchWards(values.district)
  }, [values.district])

  useEffect(() => {
    if (!user) return;
    setValues({
      username: user.username,
      phone: user.phone,
      email: user.email
    })
  }, [user])
  useEffect(() => {
    if (!cart?.products) return;
    setAmount(renderTotalPrice(cart.products))
  }, [cart])
  useEffect(() => {
    amount >= 10000000 && setCOD(0)
  }, [amount])

  return (
    <div className="w-[80%] mx-auto">
      <div className="container mx-auto">
        <Header />
        <form className="grid grid-cols-7 gap-4 mt-8" onSubmit={handleSubmit}>
          <div className="col-span-4">
            <FormControl mb={4} isInvalid={errors.username && touched.username}>
              <Input type='text' name="username" placeholder={'Tên người nhận'} value={values.username || ' '} onChange={handleChange} onBlur={handleBlur} />
              {errors.username && touched.username && <FormErrorMessage>{errors.username}</FormErrorMessage>}
            </FormControl>
            <div className="flex gap-4 mb-4" >
              <FormControl className="w-2/3" isInvalid={errors.email && touched.email}>
                <Input type='email' name="email" placeholder="Email người nhận" value={values.email || ' '} onChange={handleChange} onBlur={handleBlur} />
                {errors.email && touched.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
              </FormControl>
              <FormControl isInvalid={errors.phone && touched.phone}>
                <Input type='phone' name="phone" className="w-1/3" placeholder="Số điện thoại người nhận" value={values.phone || ''} onChange={handleChange} onBlur={handleBlur} />
                {errors.phone && touched.phone && <FormErrorMessage>{errors.phone}</FormErrorMessage>}
              </FormControl>
            </div>
            <div className="flex gap-4 mb-4">
              <FormControl className="w-1/2" isInvalid={errors.province && touched.province}>
                <Select placeholder="Chọn Thành phố/ Tỉnh" name="province" defaultValue={values.province}
                  onChange={handleChange} onBlur={handleBlur}
                >
                  {provinces && provinces.length > 0 ? provinces.map((province) => {
                    return <option key={province.province_id} value={province.province_id}>{province.province_name}</option>
                  }) : null}
                </Select>
                {errors.province && touched.province && <FormErrorMessage>{errors.province}</FormErrorMessage>}
              </FormControl>
              <FormControl className="w-1/2" isInvalid={errors.district && touched.district}>
                <Select placeholder="Chọn Thành Quận/ Huyện" name="district" defaultValue={values.district}
                  onChange={handleChange} onBlur={handleBlur}
                >
                  {districts && districts.length > 0 ? districts.map((district) => {
                    return <option key={district.district_id} value={district.district_id}>{district.district_name}</option>
                  }) : null}
                </Select>
                {errors.district && touched.district && <FormErrorMessage>{errors.district}</FormErrorMessage>}
              </FormControl>
              <FormControl className="w-1/2" isInvalid={errors.ward && touched.ward}>
                <Select placeholder="Chọn Thành Phường/ Xã" name="ward" defaultValue={values.ward}
                  onChange={handleChange} onBlur={handleBlur}
                >
                  {wards && wards.length > 0 ? wards.map((ward) => {
                    return <option key={ward.ward_id} value={ward.ward_id}>{ward.ward_name}</option>
                  }) : null}
                </Select>
                {errors.ward && touched.ward && <FormErrorMessage>{errors.ward}</FormErrorMessage>}
              </FormControl>
            </div>
            <FormControl className="mb-4">
              <Textarea placeholder="Ghi chú" name="note" value={values.note} onChange={handleChange} onBlur={handleBlur} />
              <FormErrorMessage>{'loi'}</FormErrorMessage>
            </FormControl>
          </div>
          <div className="col-span-3">
            <ul className="col-span-2">
              {cart && cart?.products ? (
                cart?.products.map((product) => {
                  return <CartItem key={product._id} product={product} handleUpdateCart={handleUpdateCart} handleRemoveFromCart={handleRemoveFromCart} />;
                })
              ) : (
                <p>Không có sản phẩm</p>
              )}
            </ul>
            {/* <div className="flex justify-between gap-3 mt-6">
              <input
                className="py-3 px-2 w-2/3 outline-[#b49149] "
                type="text"
                name="code"
                placeholder="Mã giảm giá"
              />
              <button className="w-1/3 py-3 px-6 bg-gray-800 text-white rounded-md cursor-pointer duration-300 ease-linear hover:bg-primary">
                Sử dụng
              </button>
            </div> */}
            <div className="h-[1px] w-full bg-gray-500 my-8"></div>
            <p className="flex justify-between items-center">
              Phí vận chuyển
              <span className="text-right">{
                Number(COD)?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "VND",
                })}</span>
            </p>
            <div className="h-[1px] w-full bg-gray-500 my-8"></div>
            <p className="flex justify-between items-center">
              Tổng cộng
              <span>
                VND <span className="text-2xl">{Number(amount + COD)?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "VND",
                })}</span>
              </span>
            </p>
            <button type="submit" className="w-full mt-8 py-4 bg-gray-800 rounded-md text-white hover:bg-primary">
              Hoàn tất đặt hàng
            </button>
          </div>
          <Link to={"/cart"}>
            <button className="text-white px-3 py-2 bg-gray-800 rounded hover:bg-primary">
              Giỏ hàng
            </button>
          </Link>
        </form>
      </div >
    </div >
  );
};

export default Checkout;
