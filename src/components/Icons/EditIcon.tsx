interface Props {
  setIsEditing: (value: React.SetStateAction<boolean>) => void;
}

const EditIcon = ({ setIsEditing }: Props) => {
  return (
    <button type="button" className="btn btn-primary" 
      onClick={() => { setIsEditing(true) }} >
      Edit
    </button>
  );
};

export default EditIcon;
