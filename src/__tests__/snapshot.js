import { render } from "@testing-library/react";
import Page from "../app/[locale]/page2";

it("renders homepage unchanged", () => {
  const { container } = render(<Page />);
  expect(container).toMatchSnapshot();
});
