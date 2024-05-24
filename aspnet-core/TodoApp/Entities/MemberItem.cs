using Volo.Abp.Domain.Entities;

namespace TodoApp.Entities
{
    public class MemberItem : BasicAggregateRoot<Guid>
    {

        public string Name { get; set; }
        public string Surname { get; set; }
        public string ID_Passport { get; set; }

        public string FSCARegistrationNumber { get; set; }
        public string InvestmentPortfolio { get; set; }
        public string InvestmentAmount { get; set; }

        public string ReasonForTransfer { get; set; }
        public string AccountNumber { get; set; }
        public string TaxNumber { get; set; }
        public string PolicyNumber { get; set; }
    }
}
