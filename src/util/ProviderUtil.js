/**
 * @author  DeckerM7
 * @since   20220512
 */

class ProviderUtil {
  types = {
    normal: { key: "normal", evaluation: () => {} },
    framed: { key: "framed", evaluation: () => {} },
    burger: { key: "burger", evaluation: () => {} },
    underlined: { key: "underlined", evaluation: () => {} },
    ghost: { key: "ghost", evaluation: () => {} },
  };

  addType = (title, evaluationFunction) => {
    this.types[title] = { key: title, evaluation: evaluationFunction };
  };

  evaluateStyles = (
    type = "normal",
    backgroundColorKey,
    colorKey,
    font,
    radius = false,
    shadow = false
  ) => {};
}

export default ProviderUtil;
