import { Badge } from "@chakra-ui/react";
export const renderStatusOrder = (status) => {
  const color =
    status === "Chờ xác nhận"
      ? "yellow"
      : status === "Đã xác nhận"
      ? "orange"
      : status === "Đã hủy"
      ? "pink"
      : "green";
  return (
    <Badge variant="solid" colorScheme={color}>
      {status}
    </Badge>
  );
};
export const renderStatusOrderHasCon = (status, condition) => {
  return ![...condition].includes(status)
    ? "bg-primary hover:text-black"
    : "bg-black hover:text-primary";
};
