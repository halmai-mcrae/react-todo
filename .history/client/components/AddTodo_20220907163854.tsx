import { useState } from 'react'
import { useForm } from '@mantine/hooks'
import { Modal } from '@mantine/core'

function AddTodo() {
  const [open, setOpen] = useState(false)

  const form = useForm({
    initialValues: {
      title: '',
      body: '',
    },
  })
  return <>
  </>
}

export default AddTodo
