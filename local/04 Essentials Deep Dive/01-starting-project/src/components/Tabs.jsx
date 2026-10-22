export default function Tabs({
  children,
  buttons,
  ButtonsContainer = 'menu',
  ...props
}) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
