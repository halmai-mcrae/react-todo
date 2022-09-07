import {useState} from 'react';
import {useForm} from '@mantine/hooks';

function AddTodo() {

  const [open, setOpen] = useState(false);

  const form = useForm({
    initialValues: {
      title: "",
      body: "",
    },
  });
}

export default AddTodo;