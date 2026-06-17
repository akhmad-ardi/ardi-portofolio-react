import { useForm } from "@tanstack/react-form"
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
      phone: "",
      message: "",
    },
    validators: {
      onSubmit: contactSchema,
    },
    onSubmit: async ({ value }) => {
      console.log("Form submitted with values:", value)
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
            name="phone"
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
