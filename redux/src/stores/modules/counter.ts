// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.

export const INCREMENT = "counter/INCREMENT" as const;
export const DECREMENT = "counter/DECREMENT" as const;

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export type CounterAction = ReturnType<typeof increment | typeof decrement>;

export interface ICounterState {
  count: number;
}

const initialState: ICounterState = {
  count: 0
};

export default (state: ICounterState = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
