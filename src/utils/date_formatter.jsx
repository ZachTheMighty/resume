export default function (date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const arr = date.split("-");
  let sup = "";

  if (+arr[2] === 1) sup = "st";
  else if (+arr[2] === 2) sup = "nd";
  else if (+arr[2] === 3) sup = "rd";
  else sup = "th";

  return (
    <>
      {months[+arr[1] - 1]} {+arr[2]}
      <sup>{sup}</sup> {arr[0]}
    </>
  );
}
