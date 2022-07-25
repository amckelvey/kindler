import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_PROJECT } from "../utils/mutations";
import Auth from "../utils/auth";

function AddProject() {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    source: "",
    link: "",
  });

  const [addProject] = useMutation(ADD_PROJECT);
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}

export default AddProject;
