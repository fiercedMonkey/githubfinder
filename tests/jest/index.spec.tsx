import { render } from "@testing-library/react";
import Home from "../../pages/index";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

it("renders searchpage", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
