export function DebugObj(props) {
  return (
    <pre
      style={{
        fontFamily: "consolas",
        width: "80%",
        borderRadius: "10px",
        margin: "auto",
        backgroundColor: "#ccc",
        color: "#000",
        fontSize: "1em",
        fontWeight: "bold",
        padding: "20px"
      }}
    >
      {printObjectDeeply(props.obj, 0)}
    </pre>
  );
}

export function printObjectDeeply(obj, level) {
  return (
    "{" +
    Object.entries(obj).map(
      el =>
        "\n" +
        "\t".repeat(level + 1) +
        el[0] +
        " : " +
        (typeof el[1] == "object" ? PrintObjectDeeply(el[1], level + 1) : el[1])
    ) +
    "\n" +
    "\t".repeat(level) +
    "}"
  );
}
