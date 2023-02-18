import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({ to, children,addClass, activeClassName }) {
  const { navigate,currentPath } = useNavigation();
  const className=classNames('text-blue-500',addClass,currentPath===to&& activeClassName);

  const handleClick = (event) => {
    if(event.ctrlKey||event.metaKey){

      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return <a className={className} href={to} onClick={handleClick} >{children}</a>;
}

export default Link;
