export default function ReservationForm({
  setStartDate,
  setEndDate,
  setWeight,
}: {
  setStartDate: (v: string) => void;
  setEndDate: (v: string) => void;
  setWeight: (v: number) => void;
}) {
  return (
    <div className="p-6 border rounded-xl">
      <div className="grid md:grid-cols-2 gap-4">

        <input type="datetime-local" onChange={(e) => setStartDate(e.target.value)} />
        <input type="datetime-local" onChange={(e) => setEndDate(e.target.value)} />

        <input
          type="number"
          placeholder="Load Weight"
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </div>
    </div>
  );
}