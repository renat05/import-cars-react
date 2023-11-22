import React from "react";
import {useForm} from "react-hook-form"
import './contact.css'
const Contact = () => {
    const {register, handleSubmit} = useForm({
        defaultValues: {}
    })
    let submit = (data) => {
        console.log(data)
    }
    return (
       <div>
      <form OnSubmit={handleSubmit(submit)}>
      <input {...register("name", {required: true})}/>
       <input {...register("number")}/>
       <button> Send </button>
      </form>
       </div>
    )
}


export default Contact;
