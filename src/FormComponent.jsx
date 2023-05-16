import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { axiosBase } from "./axios/axoisBase";

const schema = yup.object({
  companyName: yup
    .string()
    .required("Company Name must be valid")
    .min(6, "min character 6"),
  contactName: yup.string().required("Contact Name must be valid"),
  contactTitle: yup.string().required("Contact Title must be valid"),
  address: yup.object().shape({
    city: yup.string().required("city must be valid"),
    country: yup.string().required("country must be valid"),
  }),
});

function FormComponent() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const addSupplier = (values) => {
    console.log(values);
  };
  return (
    <>
      <form onSubmit={handleSubmit(addSupplier)}>
        <div>
          <label>Company Name</label>
          <input
            {...register("companyName")}
            style={{
              border: formState?.errors?.companyName ? "1px solid red" : "",
            }}
          />
          {formState?.errors?.companyName && (
            <span style={{ color: "red" }}>
              {formState.errors.companyName.message}
            </span>
          )}
        </div>
        <div>
          <label>Contact Name</label>
          <input {...register("contactName")} />
          <p style={{ color: "red" }}>
            {formState?.errors?.contactName?.message}
          </p>
        </div>
        <div>
          <label>Contact Title</label>
          <input {...register("contactTitle")} />
          <p style={{ color: "red" }}>
            {formState?.errors?.contactTitle?.message}
          </p>
        </div>
        <div>
          <label>City</label>
          <input {...register("address.city")} />
          <p style={{ color: "red" }}>
            {formState?.errors?.address?.city?.message}
          </p>
        </div>
        <div>
          <label>address</label>
          <input {...register("address.country")} />
          <p style={{ color: "red" }}>
            {formState?.errors?.address?.country?.message}
          </p>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}

export default FormComponent;
