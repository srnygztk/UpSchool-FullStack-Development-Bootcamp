using Application.Common.Interfaces;
using Domain.Common;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// namespace Application.Features.Addresses.Commands.Delete
// {
//     public class AddressHardDeleteCommandHandler : IRequestHandler<AddressHardDeleteCommand, Response<int>>
//     {
//         public Task<Response<int>> Handle(AddressHardDeleteCommand request, CancellationToken cancellationToken)
//         {
//             throw new NotImplementedException();
//         }
//     }