import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";
import EventCard from "../../components/EventCard";


describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home />);
    await screen.findByTestId("event-list")
  })
  it("a list a people is displayed", async () => {
    render(<Home />);
    await screen.findAllByTestId("people-card")
  })
  it("a footer is displayed", async () => {
    render(<Home />)
    await screen.findByTestId("footer-test")
  })
  it("an event card, with the last event, is displayed", () => {
    waitFor(() => {
      render(<Home />);
      const lastEventCard = screen.getByTestId('last-event-testid')
      expect(lastEventCard).toBeInTheDocument()
  });
})
})

