import React, { useState } from 'react'
import { useForm } from '@mantine/form'
import { Group, Modal, Button, TextInput, Textarea } from '@mantine/core'


function AddTodo() {
  const [open, setOpen] = useState(false)

  const form = useForm({
    initialValues: {
      title: '',
      body: '',
    },
  })
  return (
    <>
      <Modal opened={open} onClose={() => setOpen(false)} title="Create todo">
        <form onSubmit={form.onSubmit(createTodo)}>
          <TextInput
            required
            mb={12}
            label="Todo"
            placeholder="What do you want to do?"
            {...form.getInputProps("title")}
          />
                    <Textarea
            required
            mb={12}
            label="Body"
            placeholder="Tell me more..."
            {...form.getInputProps("body")}
          />

          <Button type="submit">Add Todo</Button>
        </form>
      </Modal>

      <Group position="center">
        <Button fullWidth mb={12} onClick={() => setOpen(true)}>
          Add Todo
        </Button>
      </Group>  
    </>
  )
}

export default AddTodo
