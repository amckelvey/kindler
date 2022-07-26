function ProjectBtn({ text, id }) {
  const styles = {
    btn: {
      backgroundColor: "#0094ff",
      color: "#fff",
      border: "none",
      outline: "none",
      fontSize: "1.2rem",
      borderRadius: "10px",
      padding: "11px 1rem",
      width: "7.5rem",
    },
  };

  function Change() {
    var container = document.getElementById(id);
    if (container.style.display !== "none") {
      container.style.display = "none";
    } else {
      container.style.display = "block";
    }
  }
  return (
    <button onClick={Change} style={styles.btn}>
      {text}
    </button>
  );
}

export default ProjectBtn;
