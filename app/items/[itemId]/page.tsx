import mockupData from "../../mockup.json";

export default function ItemDetail({
  params: { itemId },
}: {
  params: { itemId: string };
}) {
  const targetData = mockupData.find((item) => item.id === Number(itemId));
  return (
    <div>
      <p>{targetData?.id}</p>
      <p>{targetData?.name}</p>
      <p>{targetData?.isCompleted}</p>
    </div>
  );
}
