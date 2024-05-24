using TodoApp.Entities;
using TodoApp.Services.Dtos;
using Volo.Abp.Domain.Repositories;

namespace TodoApp.Services
{
    public class MemberAppService : TodoAppAppService
    {
        private readonly IRepository<MemberItem, Guid> _memberItemRepository;

        public MemberAppService(IRepository<MemberItem, Guid> memberItemRepository)
        {
            _memberItemRepository = memberItemRepository;
        }

        public async Task<List<MemberItemDto>> GetListAsync()
        {
            var items = await _memberItemRepository.GetListAsync();

            return items
                .Select(x => new MemberItemDto
                {
                    Id = x.Id,
                    Name = x.Name,
                    AccountNumber = x.AccountNumber,
                    FSCARegistrationNumber = x.FSCARegistrationNumber,
                    ID_Passport = x.ID_Passport,
                    InvestmentAmount = x.InvestmentAmount,
                    InvestmentPortfolio = x.InvestmentPortfolio,
                    PolicyNumber = x.PolicyNumber,
                    ReasonForTransfer = x.ReasonForTransfer,
                    Surname = x.Surname,
                    TaxNumber = x.TaxNumber
                }).ToList();
        }

        public async Task<MemberItemDto> CreateAsync(MemberItemDto input)
        {
            var data = new MemberItem{
                AccountNumber = input.AccountNumber,
                FSCARegistrationNumber = input.FSCARegistrationNumber,
                ID_Passport = input.ID_Passport,
                InvestmentAmount = input.InvestmentAmount,
                InvestmentPortfolio = input.InvestmentPortfolio,
                PolicyNumber = input.PolicyNumber,
                ReasonForTransfer = input.ReasonForTransfer,
                Surname = input.Surname,
                TaxNumber = input.TaxNumber,
                Name = input.Name,
            };

            var memberItem = await _memberItemRepository.InsertAsync(data);

            return new MemberItemDto
            {
                Id = memberItem.Id,
                Name = memberItem.Name,
                AccountNumber = memberItem.AccountNumber,
                FSCARegistrationNumber = memberItem.FSCARegistrationNumber,
                ID_Passport = memberItem.ID_Passport,
                InvestmentAmount = memberItem.InvestmentAmount,
                InvestmentPortfolio = memberItem.InvestmentPortfolio,
                PolicyNumber = memberItem.PolicyNumber,
                ReasonForTransfer = memberItem.ReasonForTransfer,
                Surname = memberItem.Surname,
                TaxNumber = memberItem.TaxNumber
            };
        }

        public async Task DeleteAsync(Guid id)
        {
            await _memberItemRepository.DeleteAsync(id);
        }
    }
}
