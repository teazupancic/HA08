describe("Included matchers:", function() {

  it("The 'toBe' matcher compares with ===", function() {
    var a = 12;
    var b = a;
    

    expect(a).toBe(b);
    expect(a).not.toBe(null);
  });
  
  it("Should fail", function() {
        var c = 12;

        expect(c).toBe(null);
  });
  
});

it("is someting equal to someting?", function() {
    var a = 12;
    var b = a + 12;
    expect(a).toEqual(12);
    expect(b).toEqual(24);
    });

