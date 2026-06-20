import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import axios from "axios"
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { contactSchema } from "@/validations/contact"

export function FormContact() {
  const formContact = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      message: "",
    },
    validators: {
      onSubmit: contactSchema,
    },
    onSubmit: ({ value }) => {
      const request = axios.post(
        "https://ardi-portofolio-backend.akhmad-ardiansyah1711.workers.dev/message",
        {
          ...value,
        }
      )
      toast.promise(request, {
        loading: "Send Message...",
        success: (response) => {
          formContact.reset()
          return response.data.message
        },
        error: (err) => {
          console.error(err)

          if (axios.isAxiosError(err)) {
            const errors = err.response?.data?.errors

            return Object.values(errors).join(", ")
          }

          return "Request Failed"
        },
        position: "top-center",
        style: {
          textTransform: "capitalize",
        },
      })
    },
  })

  return (
    <>
      <form
        id="form-contact"
        onSubmit={(e) => {
          e.preventDefault()
          formContact.handleSubmit()
        }}
      >
        <FieldGroup>
          <formContact.Field
            name="name"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid

              return (
                <Field className="mx-auto w-full md:w-5/6">
                  <FieldLabel className="text-xl">Name</FieldLabel>
                  <FieldContent>
                    <Input
                      type="text"
                      id={field.name}
                      name={field.name}
                      className={`pixel-box w-full border px-3 py-4 ${isInvalid ? "mb-3" : ""}`}
                      placeholder="Your Name"
                      value={field.state.value}
                      onChange={(e) => field.setValue(e.target.value)}
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </FieldContent>
                </Field>
              )
            }}
          />

          <formContact.Field
            name="email"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid

              return (
                <Field className="mx-auto w-full md:w-5/6">
                  <FieldLabel className="text-xl">Email</FieldLabel>
                  <FieldContent>
                    <Input
                      type="email"
                      id={field.name}
                      name={field.name}
                      className={`pixel-box w-full border px-3 py-4 ${isInvalid ? "mb-3" : ""}`}
                      placeholder="Your Email"
                      value={field.state.value}
                      onChange={(e) => field.setValue(e.target.value)}
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </FieldContent>
                </Field>
              )
            }}
          />

          <formContact.Field
            name="phone_number"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid

              return (
                <Field className="mx-auto w-full md:w-5/6">
                  <FieldLabel className="text-xl">Phone Number</FieldLabel>
                  <FieldContent>
                    <Input
                      type="tel"
                      id={field.name}
                      name={field.name}
                      className={`pixel-box w-full border px-3 py-4 ${isInvalid ? "mb-3" : ""}`}
                      placeholder="Your Phone Number"
                      value={field.state.value}
                      onChange={(e) => field.setValue(e.target.value)}
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </FieldContent>
                </Field>
              )
            }}
          />

          <formContact.Field
            name="message"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid

              return (
                <Field className="mx-auto w-full md:w-5/6">
                  <FieldLabel className="text-xl">Message</FieldLabel>
                  <FieldContent>
                    <Textarea
                      rows={7}
                      id={field.name}
                      name={field.name}
                      className={`pixel-box w-full border px-3 py-4 ${isInvalid ? "mb-3" : ""}`}
                      placeholder="Your Message"
                      value={field.state.value}
                      onChange={(e) => field.setValue(e.target.value)}
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </FieldContent>
                </Field>
              )
            }}
          />
        </FieldGroup>
      </form>

      <div className="mx-auto my-5 w-full md:w-5/6">
        <Button
          type="submit"
          form="form-contact"
          className="pixel-box w-full bg-fuchsia-600 text-white"
        >
          Send Message
        </Button>
      </div>
    </>
  )
}
