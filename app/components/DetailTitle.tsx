import StateIndicator from "@/app/components/StateIndicator";

type Props = {
  isCompleted: boolean | undefined;
  title: string | undefined;
};

export default function DetailTitle({ isCompleted, title }: Props) {
  return (
    <div className="border-2 border-slate-900 rounded-xl py-2 flex justify-center gap-4 bg-white">
      <StateIndicator isCompleted={isCompleted} />
      <input
        className="underline w-fit focus:outline-none"
        type="text"
        defaultValue={title}
      />
    </div>
  );
}
