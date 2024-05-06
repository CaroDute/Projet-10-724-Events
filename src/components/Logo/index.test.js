import { render, screen } from "@testing-library/react";
import Logo from ".";

    describe("When a Logo is created ", () => {
        it("the Logo contain this path value M 73.406 42.577 C 72.35 42.577 71.437 42.342 70.667 41.872 C 69.898 41.395 69.302 40.724 68.879 39.859 C 68.457 38.987 68.246 37.958 68.246 36.773 C 68.246 35.567 68.454 34.529 68.869 33.657 C 69.292 32.778 69.884 32.104 70.647 31.634 C 71.417 31.164 72.329 30.929 73.385 30.929 C 74.455 30.929 75.367 31.174 76.124 31.664 C 76.886 32.148 77.465 32.85 77.86 33.769 C 78.262 34.689 78.453 35.796 78.433 37.09 L 77.207 37.09 L 77.207 36.681 C 77.173 35.169 76.832 34.018 76.185 33.228 C 75.538 32.438 74.611 32.042 73.406 32.042 C 72.159 32.042 71.195 32.455 70.514 33.279 C 69.84 34.096 69.503 35.254 69.503 36.753 C 69.503 38.238 69.84 39.389 70.514 40.206 C 71.195 41.024 72.152 41.432 73.385 41.432 C 74.237 41.432 74.979 41.235 75.613 40.84 C 76.253 40.438 76.76 39.866 77.135 39.123 L 78.198 39.593 C 77.755 40.547 77.115 41.282 76.277 41.8 C 75.439 42.318 74.482 42.577 73.406 42.577 Z M 69.053 37.09 L 69.053 36.027 L 77.769 36.027 L 77.769 37.09 L 69.053 37.09 Z ", () => {
            render(<Logo />)
            expect(screen.getByTestId("logo").getAttribute('d'))
            .toEqual('M 73.406 42.577 C 72.35 42.577 71.437 42.342 70.667 41.872 C 69.898 41.395 69.302 40.724 68.879 39.859 C 68.457 38.987 68.246 37.958 68.246 36.773 C 68.246 35.567 68.454 34.529 68.869 33.657 C 69.292 32.778 69.884 32.104 70.647 31.634 C 71.417 31.164 72.329 30.929 73.385 30.929 C 74.455 30.929 75.367 31.174 76.124 31.664 C 76.886 32.148 77.465 32.85 77.86 33.769 C 78.262 34.689 78.453 35.796 78.433 37.09 L 77.207 37.09 L 77.207 36.681 C 77.173 35.169 76.832 34.018 76.185 33.228 C 75.538 32.438 74.611 32.042 73.406 32.042 C 72.159 32.042 71.195 32.455 70.514 33.279 C 69.84 34.096 69.503 35.254 69.503 36.753 C 69.503 38.238 69.84 39.389 70.514 40.206 C 71.195 41.024 72.152 41.432 73.385 41.432 C 74.237 41.432 74.979 41.235 75.613 40.84 C 76.253 40.438 76.76 39.866 77.135 39.123 L 78.198 39.593 C 77.755 40.547 77.115 41.282 76.277 41.8 C 75.439 42.318 74.482 42.577 73.406 42.577 Z M 69.053 37.09 L 69.053 36.027 L 77.769 36.027 L 77.769 37.09 L 69.053 37.09 Z')
        });
    });

