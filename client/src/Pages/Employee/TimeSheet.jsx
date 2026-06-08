import styled from "styled-components";
import { Navbar } from "../../CommonComponent/Navbar";
import { useEffect, useMemo, useState } from "react";
import API from "../../CommonComponent/TokenRequest";
import { Modal, Open, Window, Close } from "../../CommonComponent/Modal";
import {
  X,
  Clock3,
  FolderKanban,
  CalendarDays,
  CheckCircle2,
  TimerReset,
  Plus,
} from "lucide-react";
import axios from "axios";
// import { Open } from "../../CommonComponent/Modal";

const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f8fafc, #eef2ff);
`;

const Header = styled.div`
  width: calc(100% - 60px);
  margin: 24px auto 0;
  border-radius: 28px;
  padding: 28px;
  background: linear-gradient(135deg, #0f172a, #1e293b, #2563eb);
  color: white;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.2);
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Welcome = styled.div`
  font-size: 15px;
  opacity: 0.8;
`;

const Name = styled.h1`
  font-size: 32px;
  margin-top: 6px;
  font-weight: 700;
`;

const Subtitle = styled.div`
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.75);
`;

const Stats = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
`;

const StatCard = styled.div`
  min-width: 160px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 18px;
`;

const StatLabel = styled.div`
  font-size: 13px;
  opacity: 0.8;
`;

const StatValue = styled.div`
  margin-top: 10px;
  font-size: 28px;
  font-weight: 700;
`;

const MainContainer = styled.div`
  max-width: calc(100% - 60px);
  margin: 30px auto;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
  border: 1px solid rgba(226, 232, 240, 0.7);
`;

const Table = styled.table`
  width: 100%;
  min-width: 1200px;
  border-collapse: separate;
  border-spacing: 0;
`;

const TH = styled.th`
  padding: 24px;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  text-align: left;
`;

const Day = styled.div`
  font-size: 15px;
  color: #0f172a;
  font-weight: 700;
`;

const DateText = styled.div`
  margin-top: 4px;
  color: #64748b;
  font-size: 13px;
`;

const TD = styled.td`
  vertical-align: top;
  padding: 18px;
  border-right: 1px solid #f1f5f9;

  &:last-child {
    border-right: none;
  }
`;

const CellContainer = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 420px;
`;

const EntryCard = styled.div`
  max-width: 170px;

  border-radius: 22px;
  padding: 18px;
  background: linear-gradient(
    135deg,
    rgba(37, 99, 235, 0.12),
    rgba(59, 130, 246, 0.05)
  );
  border: 1px solid rgba(59, 130, 246, 0.15);
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 25px rgba(37, 99, 235, 0.12);
  }
`;

const ProjectName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #0f172a;
  font-weight: 700;
  font-size: 15px;
`;

const EntryFooter = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Hours = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #334155;
  font-size: 13px;
  font-weight: 600;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(22, 163, 74, 0.12);
  color: #16a34a;
  font-size: 12px;
  padding: 7px 12px;
  border-radius: 50px;
  font-weight: 600;
`;

const AddButton = styled.div`
  /* border: 2px dashed #cbd5e1; */

  /* border-radius: 22px; */
  max-width: 170px;
  border-radius: 5px;
  padding: 18px;
  min-height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #2563eb;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  background: rgba(37, 99, 235, 0.08);

  &:hover {
    background: rgba(37, 99, 235, 0.08);
    border-color: #2563eb;
    background-color: #cccceb;
    transform: translateY(-2px);
  }
`;

const Comment = styled.div`
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 10px;
  font-size: 13px;
  color: #475569;
  line-height: 1.5;
  word-break: break-word;
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h2`
  color: #0f172a;
  font-size: 24px;
`;

const InputGroup = styled.div`
  margin-top: 22px;
`;

const Label = styled.div`
  margin-bottom: 10px;
  color: #334155;
  font-size: 14px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  height: 54px;
  border: none;
  outline: none;
  background: #f8fafc;
  background: #eef2ff;

  border-radius: 16px;
  padding: 0 18px;
  font-size: 15px;
  color: #0f172a;

  &:focus {
    background: #eef2ff;
  }
`;

const SaveButton = styled.button`
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 18px;
  margin-top: 30px;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 30px rgba(37, 99, 235, 0.25);
  }
`;

export const Timesheet = () => {
  const [user, setUser] = useState();

  const [weekDates, setWeekDates] = useState([]);

  const [timesheetData, setTimesheetData] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

  const [selectedDay, setSelectedDay] = useState(null);

  const [formData, setFormData] = useState({
    project: "",
    hours: "",
    comments: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/me");

        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchTimeSheet = async () => {
      try {
        const res = await API.get(`/gettimeSheet/${user?.Id}`);

        const groupedData = [[], [], [], [], [], [], []];

        res.data.forEach((entry) => {
          const day = new Date(entry.date).getDay();

          const dayIndex = day === 0 ? 6 : day - 1;

          groupedData[dayIndex].push(entry);
        });

        setTimesheetData(groupedData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTimeSheet();
  }, [user]);

  useEffect(() => {
    const today = new Date();

    const currentDay = today.getDay();

    const monday = new Date(today);

    monday.setDate(today.getDate() - currentDay + 1);

    const days = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);

      date.setDate(monday.getDate() + i);

      days.push({
        day: date.toLocaleDateString("en-US", {
          weekday: "long",
        }),
        date: date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
        }),
        fullDate: date.toISOString().split("T")[0], // 2026-06-08
      });
    }

    setWeekDates(days);
  }, []);

  const handleSave = async () => {
    if (!formData.project || !formData.hours) return;

    // const updated = [...timesheetData];

    // updated[selectedDay].push({
    //   project: formData.project,
    //   hours: formData.hours,
    //   comments: formData.comments,
    //   status: "Submitted",
    //   date: selectedDay,
    // });

    const payload = {
      project: formData.project,
      hours: formData.hours,
      comments: formData.comments,
      status: "Submitted",
      date: weekDates[selectedDay]?.fullDate,
    };

    // setTimesheetData(updated);

    try {
      await API.post("timeSheet", payload);
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }

    try {
      const res = await API.get(`/gettimeSheet/${user?.Id}`);

      const groupedData = [[], [], [], [], [], [], []];

      res.data.forEach((entry) => {
        const day = new Date(entry.date).getDay();

        const dayIndex = day === 0 ? 6 : day - 1;

        groupedData[dayIndex].push(entry);
      });

      setTimesheetData(groupedData);
    } catch (err) {
      console.log(err);
    }
  };

  const totalHours = useMemo(() => {
    return timesheetData
      .flat()
      .reduce((acc, item) => acc + Number(item.hours || 0), 0);
  }, [timesheetData]);

  const totalProjects = useMemo(() => {
    return timesheetData.flat().length;
  }, [timesheetData]);

  return (
    <Page>
      <Navbar />

      <Modal>
        <Header>
          <TopRow>
            <UserInfo>
              <Welcome>Welcome Back 👋</Welcome>

              <Name>
                {user?.firstname} {user?.lastname}
              </Name>

              <Subtitle>
                Manage and track your weekly work reports easily
              </Subtitle>
            </UserInfo>

            <Stats>
              <StatCard>
                <StatLabel>Total Hours</StatLabel>

                <StatValue>{totalHours}h</StatValue>
              </StatCard>

              <StatCard>
                <StatLabel>Projects Logged</StatLabel>

                <StatValue>{totalProjects}</StatValue>
              </StatCard>

              <StatCard>
                <StatLabel>Status</StatLabel>

                <StatValue>Active</StatValue>
              </StatCard>
            </Stats>
          </TopRow>
        </Header>

        <MainContainer>
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  {weekDates.map((item, index) => (
                    <TH key={index}>
                      <Day>{item.day}</Day>

                      <DateText>{item.date}</DateText>
                    </TH>
                  ))}
                </tr>
              </thead>

              <tbody>
                <tr>
                  {timesheetData.map((entries, dayIndex) => (
                    <TD key={dayIndex}>
                      <CellContainer>
                        {entries.map((entry, index) => (
                          <EntryCard key={index}>
                            <ProjectName>
                              <FolderKanban size={18} />

                              {entry.project}
                            </ProjectName>
                            <EntryFooter>
                              <Hours>
                                <Clock3 size={14} />
                                {entry.hours} Hours
                              </Hours>

                              {entry.comments && (
                                <Comment>
                                  <strong>Comment:</strong>
                                  <br />
                                  {entry.comments}
                                </Comment>
                              )}

                              <Status>
                                <CheckCircle2 size={14} />
                                {entry.status}
                              </Status>
                            </EntryFooter>
                          </EntryCard>
                        ))}
                        <Open
                          key={dayIndex}
                          opens="TimeSheet_form"
                          onOpen={() => setSelectedDay(dayIndex)}
                        >
                          <AddButton>
                            <Plus size={18} />
                            Add Work Entry
                          </AddButton>
                        </Open>
                      </CellContainer>
                    </TD>
                  ))}
                </tr>
              </tbody>
            </Table>
          </TableWrapper>
        </MainContainer>

        <Window name="TimeSheet_form">
          <ModalTop>
            <ModalTitle>Add Timesheet</ModalTitle>
          </ModalTop>

          <InputGroup>
            <Label>Project Name</Label>

            <Input
              placeholder="Enter project name"
              value={formData.project}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  project: e.target.value,
                })
              }
            />
          </InputGroup>

          <InputGroup>
            <Label>Working Hours</Label>

            <Input
              type="number"
              placeholder="Enter hours"
              value={formData.hours}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  hours: e.target.value,
                })
              }
            />
          </InputGroup>

          <InputGroup>
            <Label>Comments</Label>

            <Input
              type="text"
              placeholder="Comments"
              value={formData.comments}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  comments: e.target.value,
                })
              }
            />
          </InputGroup>
          <Close>
            <SaveButton onClick={handleSave}>Save Timesheet</SaveButton>
          </Close>
        </Window>
      </Modal>
    </Page>
  );
};
