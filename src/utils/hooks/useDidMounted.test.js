import { renderHook } from '@testing-library/react-hooks';

import { useDidMounted } from './useDidMounted';

describe('useIsMount', () => {
  it('should be true on first render and false after', () => {
    const { result, rerender } = renderHook(() => useDidMounted());
    expect(result.current).toEqual(true);
    rerender();
    expect(result.current).toEqual(false);
    rerender();
    expect(result.current).toEqual(false);
  });
});
