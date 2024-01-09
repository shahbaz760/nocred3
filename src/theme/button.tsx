import { Button, ButtonProps } from 'react-bootstrap';
import { RotatingLines } from 'react-loader-spinner';

interface IProps extends ButtonProps {
  loading?: boolean;
}

const CustomButton: React.FC<IProps> = ({ loading, ...rest }) => {
  return (
    <Button
      type='button'
      {...rest}
      className={`custom_btn ${loading ? 'loading' : ''} ${
        rest.className ?? ''
      }`}
    >
      {rest.children}
      {loading && (
        <span className='loader'>
          <RotatingLines
            visible={true}
            height='20'
            width='20'
            strokeColor='#fff'
          />
        </span>
      )}
    </Button>
  );
};

export default CustomButton;
