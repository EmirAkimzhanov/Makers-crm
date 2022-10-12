import { IButton } from 'src/@types/button';
import { styles } from './style';


const Button = (props: IButton<{}>) => { 
  return  (
    <button
    {...props}
      className={styles.button}
    >
      Click me
    </button>
  );
};

export default Button;