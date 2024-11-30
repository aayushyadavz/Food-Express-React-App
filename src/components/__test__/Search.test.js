import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resCardListMock.json";
import "@testing-library/jest-dom";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search res list for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

  const inputBox = screen.getByPlaceholderText(
    "Search for restaurants and food"
  );
  const searchButton = screen.getByTestId("search");

  fireEvent.change(inputBox, { target: { value: "burger" } });
  fireEvent.click(searchButton);

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

  const filterButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(filterButton);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(1);
});
