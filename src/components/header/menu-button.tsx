import { createSignal, onMount, Show, type JSX, type Component, splitProps } from 'solid-js'
import classnames from 'clsx'
import Styles from './menu-button.module.scss'

type Props = JSX.ButtonHTMLAttributes<HTMLButtonElement>

const paths = {
  open: 'M2.753 18h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5a.75.75 0 0 1-.102-1.493L2.753 18h18.5-18.5Zm0-6.497h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5a.75.75 0 0 1-.102-1.493l.102-.007h18.5-18.5Zm-.001-6.5h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5A.75.75 0 0 1 2.65 5.01l.102-.007h18.5-18.5Z',
  close:
    'm4.397 4.554.073-.084a.75.75 0 0 1 .976-.073l.084.073L12 10.939l6.47-6.47a.75.75 0 1 1 1.06 1.061L13.061 12l6.47 6.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L12 13.061l-6.47 6.47a.75.75 0 0 1-1.06-1.061L10.939 12l-6.47-6.47a.75.75 0 0 1-.072-.976l.073-.084-.073.084Z'
}

const MenuButton: Component<Props> = (props) => {
  const [isMounted, setMounted] = createSignal(false)
  const [isMenuOpened, setMenuOpened] = createSignal(false)
  const displayState = () => (isMenuOpened() ? 'close' : 'open')
  const label = () => (isMenuOpened() ? 'Close header menu' : 'Open header menu')

  const [, restProps] = splitProps(props, ['class', 'children'])

  function handleToggleMenu() {
    const body = document.body

    setMenuOpened((value) => {
      const newValue = !value

      if (newValue) body.classList.add('mobile-header-menu-open')
      else body.classList.remove('mobile-header-menu-open')

      return newValue
    })
  }

  onMount(() => setMounted(true))

  return (
    <Show
      when={isMounted()}
      fallback={
        <svg
          class={classnames(props.class, Styles.size, Styles.svg, Styles.placeHolder)}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={paths['open']} />
        </svg>
      }
    >
      <button
        class={classnames(Styles.button, Styles.size, props.class)}
        aria-label={label()}
        aria-pressed={isMenuOpened()}
        onclick={handleToggleMenu}
        {...restProps}
      >
        <svg class={Styles.svg} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d={paths[displayState()]} />
        </svg>
      </button>
    </Show>
  )
}

export default MenuButton
