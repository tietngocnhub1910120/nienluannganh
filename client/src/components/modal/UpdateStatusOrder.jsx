import React, { useEffect, useState } from "react";
import { Button, Select } from "@chakra-ui/react";
function UpdateStatusOrder(props) {
    const { hide, handleEdit, selectedId, oldStatus } = props;
    const listStatus = ["Chờ xác nhận", "Đã xác nhận", "Đang giao", "Đã giao", "Đã hủy"];
    const [newStatus, setNewStatus] = useState('')
    useEffect(() => {
        oldStatus && setNewStatus(oldStatus)
    }, [oldStatus])
    return (
        <div>
            <Select placeholder='Select option'
                value={newStatus}
                onChange={(e) => { setNewStatus(e.target.value) }}>
                {listStatus.map((stt, index) => {
                    return <option key={index} value={stt}>{stt}</option>
                })}
            </Select>
            <div className="mt-4">
                <Button
                    isDisabled={newStatus === '' || newStatus === oldStatus}
                    onClick={() => {
                        if (newStatus !== oldStatus && newStatus !== '') {
                            handleEdit(true, selectedId, newStatus);
                            hide();
                        }
                    }}
                    colorScheme={"messenger"}
                    size={"sm"}
                >
                    Đồng ý
                </Button>

                <Button

                    onClick={hide}
                    ml={4}
                    colorScheme={"pink"}
                    variant="outline"
                    size={"sm"}
                >
                    Từ chối
                </Button>
            </div>
        </div>
    );
}

export default UpdateStatusOrder;
