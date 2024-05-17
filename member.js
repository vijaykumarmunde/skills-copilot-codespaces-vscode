function skillMembers(params) {
    return {
        restrict:'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope:{number:'='}
    };
    //This is for second Copilot example...!
}
