import { render, screen } from '../test/test-utils'
import InternRow from './InternRow'

test('finds the Remove button by role', () => {
  render(
    <InternRow
      id={1}
      name="Rahul"
      score={92}
      onRemove={() => {}}
    />
  )

  /*
  screen.debug() prints the current rendered DOM structure to the terminal.
  It is useful when a test fails or when we are unsure how an element appears
  in the DOM. By inspecting the output, we can see elements, text, attributes,
  and accessible structure, which helps us choose an appropriate Testing
  Library query such as getByRole, getByText, or getByLabelText.
  */
  screen.debug()

  // getByRole is preferred because it finds the element based on
  // its accessible role, similar to how assistive technologies see the page.
  const removeButton = screen.getByRole('button', { name: 'Remove' })

  expect(removeButton).toBeInTheDocument()
})