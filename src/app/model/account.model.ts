export interface AccountDetails {
  currentPage:          number;
  totalPages:           number;
  pageSize:             number;
  accountId:            string;
  balance:              number;
  accountOperationDTOS: AccountOperation[];
}

export interface AccountOperation {
  id:            number;
  operationDate: Date;
  amount:        number;
  type:          string;
  description:   string;
}
