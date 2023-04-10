using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Common;
using MediatR;

namespace Application.Features.Addresses.Commands.Delete
{
    public class AddressDeleteCommand : IRequest<Response<int>>
    {
        public int Id { get; set; }
    }
}