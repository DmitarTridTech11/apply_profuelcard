const Steper = ({ step }) => {
  return (
    <div>
      <ol className="relative">
        {Array.from({ length: 2 }, (_, i) => (
          <li
            key={i}
            className={`p-5  ml-6 ${
              step === i + 1
                ? "border-l-4 border-blue-500"
                : "border-l-4 border-gray-200 dark:border-gray-300"
            }`}
            style={{
              paddingLeft: step === i + 1 ? "calc(1rem - 1px)" : "1rem",
            }}
          >
            <h3
              className="font-medium leading-tight"
              style={{ color: step === i + 1 ? "black" : "#666565" }}
            >
              {["Contact Info", "Confirmation"][i]}
            </h3>
            <p
              className="text-sm pt-2 "
              style={{
                color: step === i + 1 ? "black" : "#666565",
                maxWidth: 350,
              }}
            >
              {
                [
                  "Please tell us who you are and how to contact you so that we can stay in touch regarding your application",
                  "Be patient until we process your application",
                ][i]
              }
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Steper;
