import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import { useState } from "react";

type Props = {
  show: boolean;
  onClose: () => void;
};

const initialData = {
  nickname: "",
  real_name: "",
  origin_description: "",
  superpowers: "",
  catch_phrase: "",
};

const ModalForm = ({ show, onClose }: Props) => {
  const [heroData, setHeroData] = useState(initialData);

  const handleCloseModal = () => {
    setHeroData(initialData);
    onClose();
  };

  const handleHeroData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.value);
    setHeroData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Modal
      size='lg'
      show={show}
      centered
    >
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>
          Create new Hero
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            className='mb-3'
            controlId='nickname'
          >
            <FloatingLabel label='Nickname'>
              <Form.Control
                name='nickname'
                onChange={handleHeroData}
                value={heroData.nickname}
                type='text'
                placeholder='Enter nickname...'
                required
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group
            className='mb-3'
            controlId='personName'
          >
            <FloatingLabel label='Person Name'>
              <Form.Control
                type='text'
                name='real_name'
                placeholder='Enter real name...'
                required
                onChange={handleHeroData}
                value={heroData.real_name}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group
            className='mb-3'
            controlId='catchPhrase'
          >
            <FloatingLabel label='Catch Phrase'>
              <Form.Control
                required
                name='catch_phrase'
                type='text'
                placeholder='Enter phrase...'
                onChange={handleHeroData}
                value={heroData.catch_phrase}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group
            className='mb-3'
            controlId='origin'
          >
            <Form.Label>Hero Origin</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              required
              name='origin_description'
              onChange={handleHeroData}
              value={heroData.origin_description}
            />
          </Form.Group>
          <Form.Group
            className='mb-3'
            controlId='superpowers'
          >
            <Form.Label>Superpowers</Form.Label>
            <Form.Control
              type='text'
              name='superpowers'
              placeholder='E.g: flying, invinsible...'
              required
              onChange={handleHeroData}
              value={heroData.superpowers}
            />
          </Form.Group>
          <Form.Group
            controlId='heroImage'
            className='mb-3'
          >
            <Form.Label>Hero photos</Form.Label>
            <Form.Control
              required
              type='file'
              multiple
              accept='image/*'
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className='justify-content-between'>
        <Button size='lg'>Create</Button>
        <Button
          variant='danger'
          onClick={handleCloseModal}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
