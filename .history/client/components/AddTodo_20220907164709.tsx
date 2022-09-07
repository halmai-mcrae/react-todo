import React, { useState } from 'react'
import { useForm } from '@mantine/form';
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
  <Modal
  opened={open}
  onClose={close}
  title="Add Todo"
  >

  </Modal>

  </>
}

export default AddTodo
