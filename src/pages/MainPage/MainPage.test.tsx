//@ts-nocheck
import { render, screen } from "@testing-library/react";
import { MainPage } from "./MainPage";
import { useLazyGetPostItemQuery } from "../../store/api/postApi";

// jest.mock("./useLazyGetPostItemQuery");

const testDate = new Date().toISOString();

const mockPostItem = {
  main_text: "Тестовый текст",
  reg_data: testDate,
  photos: [],
  user_fk: {
    name: "Тестовый пользователь",
  },
  id: 1,
};

describe("Тестируем страницу MainPage", () => {
//   beforeEach(() => {
//     useLazyGetPostItemQuery.mockClear();
//   });

  test("Верно отображается список постов", () => {
    // useLazyGetPostItemQuery.mockREturnValueOnce = {
    //   fetchTrigger: () => {},
    //   data: [mockPostItem],
    //   isError: false,
    //   isLoading: false,
    //   isSuccess: true,
    // };
    // render(<MainPage />)

    // const postItemElement = screen.getByText('Тестовый текст')

    // expect (postItemElement). toBeInTheDocument()
  });
});
