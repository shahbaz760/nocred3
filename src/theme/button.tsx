import { Button, ButtonProps } from 'react-bootstrap';

interface IProps extends ButtonProps {}

const CustomButton: React.FC<IProps> = ({ ...rest }) => {
  return (
    <Button
      type='button'
      {...rest}
      className={`custom_btn ${rest.className ?? ''}`}
    >
      {rest.children}
    </Button>
  );
};

export default CustomButton;
