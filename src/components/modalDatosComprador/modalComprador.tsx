import React from 'react'
import logo from "../../assets/cortauñas.jpg";
import { BsXLg } from "react-icons/bs";
import { Cliente } from "../../../types/client"
import { useFormik } from 'formik'
import * as Yup from "yup"
import FormComponent from '../form/form';
import InputComponent from '../form/input';
import { MdAttachEmail, MdDriveFileRenameOutline } from 'react-icons/md';

import { appState } from '../../../types/appState';
import { useSelector } from 'react-redux';
import IconsContainer from '../iconsWraper/IconsContainer';


interface props {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalComprador = ({ setShow, show }: props) => {

  const data = useSelector((state: appState) => state.appReducer.cartReducer.cart)

  const initialValues: Cliente = {
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    direccion: ""
  }

  const validateSchema = Yup.object().shape({
    correo: Yup.string().required("El campo es obligatorio").min(4, "El campo debe tener minimo 6 caracteres").max(30, "El campo debe tener maximo 30 caracteres").email().matches(/^[A-Za-z0-9._%+-]+@(gmail\.com|hotmail\.com|yahoo\.com)$/,"Verifique el campo correo este escrito correctamente"),
    apellido: Yup.string().required("El campo es obligatorio").min(4, "El campo debe tener minimo 4 caracteres").max(30, "El campo debe tener maximo 30 caracteres").matches(/^[aA-zZ\s]+$/, "El campo solo admite letras"),
    nombre: Yup.string().required("El campo es obligatorio").min(4, "El campo debe tener minimo 4 caracteres").max(30, "El campo debe tener maximo 30 caracteres").matches(/^[aA-zZ\s]+$/, "El campo solo admite letras"),
    telefono: Yup.string().required("El campo es obligatorio").matches(/^\d{0,10}$/, "El numero de telefono es invalido"),
    direccion: Yup.string().required("El campo es obligatorio").min(4, "El campo debe tener minimo 6 caracteres").max(30, "El campo debe tener maximo 30 caracteres"),
  })


  const formik = useFormik<Cliente>({
    initialValues,
    validationSchema: validateSchema,
    onSubmit: ((values) => {
      console.log(values)
    })

  })

  const { handleChange, handleSubmit, values, touched, errors, handleBlur } = formik


  return (
    <aside className={`bg-rosa mb-2 overflow-y-auto z-20 absolute top-0 letf-0 w-full h-full p-2  ${show ? "block" : "hidden"}`}>
      <header className='mb-4'>
        <section className='flex justify-between items-center p-2'>
          <img src={logo} className='w-8 h-8 rounded-full md:w-12 lg:h-16 lg:w-16 md:h-12' alt="logo" />
          <IconsContainer icon={BsXLg} size={30} onClick={() => setShow(!show)} />
        </section>
      </header>

      <section className=' rounded-xl w-full h-full  '>
        <FormComponent handleSubmit={handleSubmit}>
          <section className=" overflow-y-auto h-5/6 flex flex-col justify-between space-y-1">
            <InputComponent
              type="text"
              value={values.nombre}
              handleChange={handleChange}
              name="nombre"
              errors={errors.nombre || ""}
              touched={touched.nombre || false}
              placeholder="ingrese nombre"
              icon={MdDriveFileRenameOutline}
              handleBlur={handleBlur}
            />
            <InputComponent
              type="text"
              value={values.apellido}
              handleChange={handleChange}
              name="apellido"
              errors={errors.apellido || ""}
              touched={touched.apellido || false}
              placeholder="ingrese apellido"
              icon={MdDriveFileRenameOutline}
              handleBlur={handleBlur}
            />
            <InputComponent
              type="text"
              value={values.correo}
              handleChange={handleChange}
              name="correo"
              errors={errors.correo || ""}
              touched={touched.correo || false}
              placeholder="test@test.com"
              icon={MdAttachEmail}
              handleBlur={handleBlur}
            />
            <InputComponent
              type="text"
              value={values.telefono}
              handleChange={handleChange}
              name="telefono"
              errors={errors.telefono || ""}
              touched={touched.telefono || false}
              placeholder="11XXXXXXXX "
              icon={MdAttachEmail}
              handleBlur={handleBlur}
            />
            <InputComponent
              type="text"
              value={values.direccion}
              handleChange={handleChange}
              name="direccion"
              errors={errors.direccion || ""}
              touched={touched.direccion || false}
              placeholder="ingrese direcion"
              icon={MdAttachEmail}
              handleBlur={handleBlur}
            />
          </section>
          <section className={`flex h-1/6 justify-center items-center w-full`}>
            <p className={`${!!errors.nombre || !!errors.apellido || !!errors.direccion || !!errors.correo || !!errors.telefono || values.nombre === "" || values.apellido === "" || values.correo === "" || values.direccion === "" || values.telefono === "" ? "block" : "hidden"} text-rojo text-lg bg-marron-oscuro rounded-lg p-2 text-center md:text-lg font-semibold uppercase flex space-x-1 items-center`}>!Complete los campos obligatorios sin errores para poder continuar¡</p>
            <a className={`${!!errors.nombre || !!errors.apellido || !!errors.direccion || !!errors.correo || !!errors.telefono || values.nombre === "" || values.apellido === "" || values.correo === "" || values.direccion === "" || values.telefono === "" ? "hidden" : ""}  w-full text-center text-lg text-blanco uppercase border-2 border-blanco bg-verde p-2 rounded-xl`} target='_blank'
              href={`${`https://wa.me/54${import.meta.env.VITE_NUMERO_CONTACTO}?text=${encodeURIComponent(`Nombre: ${values.nombre}\nApellido: ${values.apellido}\nDireccion: ${values.direccion}\nTelefono: ${values.telefono}\n\nPedido\n${data.map((producto) => {
                return `Nombre: ${producto.name} Cantidad de productos: ${producto.quantity}`
              })}`)}`}`}>Continuar</a>
          </section>
        </FormComponent>
      </section>

    </aside>


  )
}

export default ModalComprador





