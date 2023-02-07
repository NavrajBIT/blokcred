import KycScript from "./kycScript";

export const KYCform = (props) => {
  const {
    status,
    isuploading,
    name,
    setName,
    description,
    setdescription,
    website,
    setwebsite,
    email,
    setemail,
    contact,
    setcontact,
    regId,
    setregId,
    idProof,
    setidProof,
    handleSubmit,
    city,
    setcity,
    state,
    setstate,
    country,
    setcountry,
    category,
    setcategory,

  } = KycScript(props.setForm);

  return (
    <div className="individualpage">
      <div className="individualformcontainer">
        <h1>Enter Your KYC Details</h1>
        <label htmlFor="name">Name of the Company*</label>
        <input
          type="text"
          id="name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name of the Company"
        />
        <label htmlFor="name">Description</label>
        <input
          type="text"
          id="name"
          value={description}
          name="description"
          onChange={(e) => setdescription(e.target.value)}
          placeholder="Name of the Company"
        />
        <label htmlFor="email">Official Website*</label>
        <input
          type="email"
          id="email"
          value={website}
          name="website"
          placeholder="Official Website"
          onChange={(e) => setwebsite(e.target.value)}
        />
        <label htmlFor="Official website">Official email ID*</label>
        <input
          type="text"
          id="phone_num"
          value={email}
          name="email"
          placeholder="Official email ID"
          onChange={(e) => setemail(e.target.value)}
        />
        <label htmlFor="website">Phone number*</label>
        <input
          type="text"
          id="website"
          name="phone"
          value={contact}
          placeholder="Phone number"
          onChange={(e) => setcontact(e.target.value)}
        />
        <label htmlFor="City">City*</label>
        <input value={city} type="text" onChange={(e)=> setcity(e.target.value) } id="City" name="City" placeholder="City" />
        <label htmlFor="State">State*</label>
        <input value={state} type="text" id="State" onChange={(e)=> setstate(e.target.value) } name="State" placeholder="State" />
        <label htmlFor="Country">Country*</label>
        <input value={country} type="text" id="Country" name="Country" onChange={(e)=> setcountry(e.target.value) } placeholder="Country" />
        <label htmlFor="Category">Category*</label>
        <select value={category} id="Category" name="Category" onChange={(e)=> setcategory(e.target.value) }>
          <option value="Agriculture">Agriculture</option>
          <option value="Automobile">Automobile</option>
          <option value="Banking">Banking</option>
          <option value="Construction">Construction</option>
          <option value="Education">Education</option>
          <option value="Energy">Energy</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Finance">Finance</option>
          <option value="Food">Food</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Hospitality">Hospitality</option>
          <option value="Insurance">Insurance</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Media">Media</option>
          <option value="Mining">Mining</option>
          <option value="Pharmaceutical">Pharmaceutical</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Retail">Retail</option>
          <option value="Technology">Technology</option>
          <option value="Telecom">Telecom</option>
          <option value="Transportation">Transportation</option>
          <option value="Travel">Travel</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="website">CIN*</label>
        <input
          type="text"
          id="website"
          name="CIN"
          value={regId}
          placeholder="CIN"
          onChange={(e) => setregId(e.target.value)}
        />
        <label htmlFor="fileselectorinput">
          ID proof of the representative*
        </label>
        {idProof.name}
        <input
          type="file"
          id="fileselectorinput"
          onChange={(e) => {
            setidProof(e.target.files[0]);
          }}
        />

        <div className="status">{status}</div>
        {isuploading ? (
          <button>Uploading...</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};
