#include "NativeCalculatorAppRust.h"

namespace facebook::react {
NativeCalculatorAppRust::NativeCalculatorAppRust(
    std::shared_ptr<CallInvoker> jsInvoker)
    : NativeCalculatorAppRustCxxSpec(std::move(jsInvoker)) {}

int NativeCalculatorAppRust::add(jsi::Runtime &rt, int x, int y) {
  return x + y;
}
int NativeCalculatorAppRust::sub(jsi::Runtime &rt, int x, int y) {
  return x - y;
}
int NativeCalculatorAppRust::mul(jsi::Runtime &rt, int x, int y) {
  return x * y;
}
int NativeCalculatorAppRust::div(jsi::Runtime &rt, int x, int y) {
  if (y == 0) {
    return 0;
  }
  return x / y;
}
} // namespace facebook::react