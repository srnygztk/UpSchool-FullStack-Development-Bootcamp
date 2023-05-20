using Application.Common.Interfaces;
using Application.Features.Addresses.Commands.Delete;
using Domain.Common;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

// namespace Application.Features.Addresses.Commands.Update
// {
//     public class AddressUpdateCommandHandler : IRequestHandler<AddressUpdateCommand, Response<int>>
//     {
//         public Task<Response<int>> Handle(AddressUpdateCommand request, CancellationToken cancellationToken)
//         {
//             throw new NotImplementedException();
//         }
//     }