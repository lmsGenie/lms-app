export interface IFaqs {
  id: string;
  question: string;
  answer: string;
}

export interface IFaqAccordion {
  faqs: IFaqs[];
}
