import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_DEVELOPER } from "../utils/queries";

function SingleDev() {
  const { data } = useQuery(QUERY_SINGLE_DEVELOPER);
  let developer;
  console.log(data);
  if (data) {
    developer = data.developer;
  }
  return;
}
