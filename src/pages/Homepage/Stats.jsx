const stats = [
  {
    id: 1,
    name: "Met their new vehicles through us",
    value: "2537 Drivers",
  },
  { id: 2, name: "Worth of high quality vehicle pool", value: "$70m" },
];

export default function Stats({ currPage }) {
  if (currPage === "indexpg") {
    return (
      <div className="sm:pb-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-white">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-orange-500 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  }
}
