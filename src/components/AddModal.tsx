import {
  Modal,
  Button,
  Form,
  FloatingLabel,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  useCreateHeroMutation,
  useDeleteImageMutation,
  useUploadImagesMutation,
} from "../store";
import { HeroData, IHero } from "../types/hero";
import toast from "react-hot-toast";
import { FiX } from "react-icons/fi";

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

const fields = [
  "nickname",
  "real_name",
  "origin_description",
  "superpowers",
  "catch_phrase",
];

const AddModal = ({ show, onClose }: Props) => {
  const [heroData, setHeroData] = useState<HeroData>(initialData);
  const [heroImages, setHeroImages] = useState<string[]>([]);
  const [uploadImages, { data, isLoading }] = useUploadImagesMutation();
  const [deleteImage, { isLoading: isImageDeleting }] =
    useDeleteImageMutation();
  const [createHero, { isLoading: isCreating }] = useCreateHeroMutation();

  const isDataChanging = isCreating || isLoading || isImageDeleting;

  const handleCloseModal = () => {
    clearFields();
    onClose();
  };

  const handleHeroData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setHeroData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUploadImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files!;
    const data = new FormData();

    for (const file of files) {
      data.append("file", file);
    }

    uploadImages(data);
  };

  const handleDeleteImage = (src: string) => {
    const id = String(src.split("/").pop());
    deleteImage(id);
    setHeroImages((prev) => prev.filter((img) => img !== src));
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (fields.some((field) => !heroData[field])) {
      toast.error("All fields are required!");
      return;
    }

    const newData: Omit<IHero, "_id"> = {
      ...heroData,
      superpowers: heroData.superpowers.split(","),
      images: heroImages,
    };

    await createHero(newData)
      .then(() => {
        clearFields();
        toast.success("Hero created!");
      })
      .catch(() => toast.error("Something went wrong!"));
  };

  const clearFields = () => {
    setHeroData(initialData);
    setHeroImages([]);
  };

  useEffect(() => {
    if (data) setHeroImages((prev) => [...prev, ...data.links]);
  }, [data]);

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
          <Row>
            <Col>
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
            </Col>
            <Col>
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
            </Col>
          </Row>

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
            <Form.Label>Hero Images</Form.Label>
            <div>
              {heroImages &&
                heroImages.map((img) => (
                  <span className='relative image__preview'>
                    <img
                      key={img}
                      src={img}
                      width={60}
                      height={60}
                      alt='hero image'
                      style={{ marginRight: "4px" }}
                    />
                    <FiX
                      className='image__xmark'
                      onClick={() => handleDeleteImage(img)}
                    />
                  </span>
                ))}
              <label
                className='label'
                htmlFor='heroImages'
              >
                {isLoading ? (
                  <Spinner
                    animation='border'
                    role='status'
                    size='sm'
                  >
                    <span className='visually-hidden'>Loading...</span>
                  </Spinner>
                ) : (
                  "Upload"
                )}
              </label>
              <input
                type='file'
                className='input'
                onChange={handleUploadImages}
                id='heroImages'
                name='heroImages'
                multiple
                disabled={isLoading}
              />
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className='justify-content-between'>
        <Button
          variant='danger'
          size='lg'
          onClick={handleCloseModal}
        >
          Close
        </Button>
        <Button
          disabled={isDataChanging}
          onClick={handleSubmitForm}
          size='lg'
        >
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
