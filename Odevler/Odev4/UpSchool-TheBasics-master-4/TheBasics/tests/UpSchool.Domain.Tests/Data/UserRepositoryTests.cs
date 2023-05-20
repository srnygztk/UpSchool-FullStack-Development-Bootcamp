using System.Linq.Expressions;
using FakeItEasy;
using UpSchool.Domain.Data;
using UpSchool.Domain.Entities;
using UpSchool.Domain.Services;

namespace UpSchool.Domain.Tests.Data;

public class UserRepositoryTests
{
    
    [Fact]
    public async Task AddAsync_ShouldThrowException_WhenEmailIsEmptyOrNull()
    {
        // Arrange
        var userRepositoryMock = A.Fake<IUserRepository>();

        Guid userId = new Guid("8f319b0a-2428-4e9f-b7c6-ecf78acf00f9");

        var cancellationSource = new CancellationTokenSource();

        var expectedUser = new User()
        {
            Id = userId,
            FirstName = "Serenay",
            LastName = "Gözütok",
            Age = 22,
            Email = ""
        };

        // Act & Assert

        IUserService userService = new UserManager(userRepositoryMock);

        var ex = await Assert.ThrowsAsync<ArgumentException>(() => userService.AddAsync(expectedUser.FirstName, expectedUser.LastName, expectedUser.Age,
            expectedUser.Email, cancellationSource.Token));

        Assert.Equal("Email cannot be null or empty.", ex.Message);
        
    }
    
    [Fact]
    public async void UpdateAsync_ShouldThrowException_WhenUserIdIsEmpty()
    {
        var userRepositoryMock = A.Fake<IUserRepository>();
        var cancellationSource = new CancellationTokenSource();
        
        var expectedUser = new User()
        {
            Id = Guid.Empty,
            FirstName = "Serenay",
            LastName = "Gözütok",
            Age = 22,
            Email = "serenayss@gmail.com"
        };
        
        IUserService userService = new UserManager(userRepositoryMock);

        var user = await userService.UpdateAsync(expectedUser,cancellationSource.Token);
        
        Assert.Throws<ArgumentException>(() => user);
    }
    
    [Fact]
    public async void UpdateAsync_ShouldThrowException_WhenUserEmailEmptyOrNull()
    {
        var userRepositoryMock = A.Fake<IUserRepository>();
        var cancellationSource = new CancellationTokenSource();

        Guid userId = new Guid("8f319b0a-2428-4e9f-b7c6-ecf78acf00f9");
        
        var expectedUser = new User()
        {
            Id = userId,
            FirstName = "Serenay",
            LastName = "Gözütok",
            Age = 22,
            Email = String.Empty
        };
        
        IUserService userService = new UserManager(userRepositoryMock);

        var user = await userService.UpdateAsync(expectedUser,cancellationSource.Token);

        Assert.Throws<ArgumentException>(() => user);

    }
    
    
    [Fact]
    public async void DeleteAsync_ShouldThrowException_WhenUserDoesntExists()
    {
        var userRepositoryMock = A.Fake<IUserRepository>();
        var cancellationSource = new CancellationTokenSource();
        
        var expectedUser = new User()
        {
            Id = Guid.Empty,
            FirstName = "Serenay",
            LastName = "Gözütok",
            Age = 22,
            Email = "serenayss@gmail.com"
        };
        

        IUserService userService = new UserManager(userRepositoryMock);
        
        var user = await userService.DeleteAsync(expectedUser.Id,cancellationSource.Token);

        Assert.Throws<ArgumentException>(() => user);
    }
    
    [Fact]
    public async void DeleteAsync_ShouldReturnTrue_WhenUserExists()
    {
        var userRepositoryMock = A.Fake<IUserRepository>();

        Guid userId = new Guid("8f319b0a-2428-4e9f-b7c6-ecf78acf00f9");

        var cancellationSource = new CancellationTokenSource();

        var expectedUser = new User()
        {
            Id = userId
        };

        //A.CallTo(() => userRepositoryMock.DeleteAsync(ex, cancellationSource.Token))
        //    .Returns(Task.FromResult(expectedUser));

        IUserService userService = new UserManager(userRepositoryMock);

        var user = await userService.AddAsync("Serenay", "Gözütok", 22, "serenayss@gmail.com", cancellationSource.Token);


        var DeletedUser = await userService.DeleteAsync(userId, cancellationSource.Token);

        Assert.True(DeletedUser);
    }
    
    [Fact]
    public async Task GetAllAsync_ShouldReturn_UserListWithAtLeastTwoRecords()
    {
        var userRepositoryMock = A.Fake<IUserRepository>();
        var cancellationSource = new CancellationTokenSource();
        List<User> userList = new List<User>();

        userList.Add(new User() { Id = Guid.NewGuid() });
        userList.Add(new User() { Id = Guid.NewGuid() });
        userList.Add(new User() { Id = Guid.NewGuid() });

        A.CallTo(() => userRepositoryMock.GetAllAsync(cancellationSource.Token))
            .Returns(Task.FromResult(userList));

        IUserService userService = new UserManager(userRepositoryMock);

        var allUsers = await userService.GetAllAsync(cancellationSource.Token);

        Assert.True(allUsers.Count >= 2);
    }

}