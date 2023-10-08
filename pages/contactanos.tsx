import { Contactanos } from "../types/contactanos"
import { useFormik } from 'formik'
import * as Yup from "yup"
import FormComponent from '../src/components/form/form'
import InputComponent from '../src/components/form/input'
import ButtomForm from '../src/components/form/buttom'
import { MdAttachEmail, MdDriveFileRenameOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { START_POST_CONTACT } from '../store/redux/sliceContact'
import FooterComponent from "./../src/components/footer/FooterComponent"
import logo from "../src/assets/Logo original-jl.png"


const ContactanosPage = () => {


  const dispatch = useDispatch()


  const initialValues: Contactanos = {
    nombre: "",
    apellido: "",
    correo: "",
  }

  const validateSchema = Yup.object().shape({
    correo: Yup.string().required("El campo es obligatorio").min(4, "El campo debe tener minimo 6 caracteres").max(30, "El campo debe tener maximo 30 caracteres").email().matches(/^[A-Za-z0-9._%+-]+@(gmail\.com|hotmail\.com|yahoo\.com)$/, "Verifique el campo correo este escrito correctamente"),
    apellido: Yup.string().required("El campo es obligatorio").min(4, "El campo debe tener minimo 4 caracteres").max(30, "El campo debe tener maximo 30 caracteres").matches(/^[aA-zZ\s]+$/, "El campo solo admite letras"),
    nombre: Yup.string().required("El campo es obligatorio").min(4, "El campo debe tener minimo 4 caracteres").max(30, "El campo debe tener maximo 30 caracteres").matches(/^[aA-zZ\s]+$/, "El campo solo admite letras"),
  })

  const formik = useFormik<Contactanos>({
    initialValues,
    validationSchema: validateSchema,
    onSubmit: ((values) => {
      dispatch(START_POST_CONTACT(values))
    })
  })


  const { handleChange, handleSubmit, values, touched, errors, handleBlur } = formik

  return (
    <section className="col-span-4 row-span-5 flex  flex-col overflow-y-auto">
      <section className=' rounded-xl w-full h-full mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <FormComponent handleSubmit={handleSubmit}>
          <section className="flex flex-col justify-start space-y-2">
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
            <section className=''>
              <header className='flex w-full space-x-2 mb-1 md:text-3xl text-xl'>
                <label className=' capitalize'>Mensaje</label>
                <label className=' capitalize text-marron-oscuro'>(Optional)</label>
              </header>
              <textarea className="w-full placeholder:text-gris resize-none h-16 md:h-24 rounded-lg p-2 mt-1" placeholder='Escribe un mensaje' name="w3review" rows={4}>
              </textarea>
            </section>
          </section>
          <section className=" flex flex-col justify-start space-y-2 items-center w-full">
            <ButtomForm name='Enviar' />
          </section>
        </FormComponent>
        <section className=" hidden lg:block w-1/2 p-3 h-full">
          <img src={logo} className="w-full h-full" alt="logo" />
        </section>
      </section>
      <FooterComponent />
    </section>
  )


}

export default ContactanosPage